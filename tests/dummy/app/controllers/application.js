/* global FileReader, alert */

import Controller from '@ember/controller';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
  @tracked photoPreviewUrl = null;
  @tracked multiFiles = [];
  @tracked photoName = null;

  get photoPreview() {
    let url = this.photoPreviewUrl;

    return htmlSafe(`background-image: url("${url}")`);
  }

  @action
  doSomething(files, reset) {
    reset();
  }

  @action
  uploadAPhoto(fileList) {
    let re = new RegExp('image/*');

    if (re.test(fileList[0].type)) {
      this.photoName = fileList[0].name;

      let reader = new FileReader();

      reader.onloadend = () => {
        this.photoPreviewUrl = reader.result;
      };

      reader.readAsDataURL(fileList[0]);
    } else {
      alert(`File must be an image. You tried to upload: ${fileList[0].type}`);
    }
  }

  @action
  uploadManyFiles(fileList) {
    this.multiFiles = fileList;
  }
}
