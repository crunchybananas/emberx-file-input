import Controller from '@ember/controller';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { tracked } from '@glimmer/tracking';

export default class extends Controller {
  @tracked photoPreviewUrl = null;

  multiFiles = [];
  photoName = null;

  get photoPreview() {
    let url = this.photoPreviewUrl;

    return htmlSafe(`background-image: url("${url}")`);
  }

  @action
  doSomething(files, reset) {
    reset();
  }
}
