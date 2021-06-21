// src/application.js
import { Application } from "stimulus"
import * as Turbo from "@hotwired/turbo"

import HelloController from "./controllers/hello_controller"
import AutoClickController from "./controllers/autoclick_controller"

// import Connection from "../../suuave-viewer-app/src/Connection"
import 'regenerator-runtime/runtime'

const application = Application.start()
application.register("hello", HelloController)
application.register("autoclick", AutoClickController)
