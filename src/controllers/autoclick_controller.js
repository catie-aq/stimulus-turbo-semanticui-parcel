import { Controller } from "stimulus"

export default class extends Controller {
  // …

  static targets = [ "link" ]

  connect(){
      console.log("hello from autoclick");

      if(this.hasLinkTarget){

        console.log(this.linkTarget);
        this.linkTarget.click();
      }

  }


}