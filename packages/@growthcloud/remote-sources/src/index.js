import { BasePlugin } from "@growthcloud/core";
import Dashboard from "@growthcloud/dashboard";
import Dropbox from "@growthcloud/dropbox";
import GoogleDrive from "@growthcloud/google-drive";
import Instagram from "@growthcloud/instagram";
import Facebook from "@growthcloud/facebook";
import OneDrive from "@growthcloud/onedrive";
import Box from "@growthcloud/box";
import Unsplash from "@growthcloud/unsplash";
import Url from "@growthcloud/url";
import Zoom from "@growthcloud/zoom";

import packageJson from "../package.json";

const availablePlugins = {
  // Using a null-prototype object to avoid prototype pollution.
  __proto__: null,
  Box,
  Dropbox,
  Facebook,
  GoogleDrive,
  Instagram,
  OneDrive,
  Unsplash,
  Url,
  Zoom,
};

export default class RemoteSources extends BasePlugin {
  static VERSION = packageJson.version;

  #installedPlugins = new Set();

  constructor(uppy, opts) {
    super(uppy, opts);
    this.id = this.opts.id || "RemoteSources";
    this.type = "acquirer";

    const defaultOptions = {
      sources: Object.keys(availablePlugins),
      target: Dashboard,
    };
    this.opts = { ...defaultOptions, ...opts };

    if (this.opts.companionUrl == null) {
      throw new Error(
        "Please specify companionUrl for RemoteSources to work, see https://uppy.io/docs/remote-sources#companionUrl"
      );
    }
  }

  setOptions(newOpts) {
    this.uninstall();
    super.setOptions(newOpts);
    this.install();
  }

  install() {
    this.opts.sources.forEach((pluginId) => {
      const optsForRemoteSourcePlugin = { ...this.opts, sources: undefined };
      const plugin = availablePlugins[pluginId];
      if (plugin == null) {
        const pluginNames = Object.keys(availablePlugins);
        const formatter = new Intl.ListFormat("en", {
          style: "long",
          type: "disjunction",
        });
        throw new Error(
          `Invalid plugin: "${pluginId}" is not one of: ${formatter.format(
            pluginNames
          )}.`
        );
      }
      this.uppy.use(plugin, optsForRemoteSourcePlugin);
      // `plugin` is a class, but we want to track the instance object
      // so we have to do `getPlugin` here.
      this.#installedPlugins.add(this.uppy.getPlugin(pluginId));
    });
  }

  uninstall() {
    for (const plugin of this.#installedPlugins) {
      this.uppy.removePlugin(plugin);
    }
    this.#installedPlugins.clear();
  }
}
