import Component from '@glimmer/component';

export default class XFileInput extends Component {
  /**
   * The text displayed when no block is passed.
   *
   * @property alt
   * @default "Upload"
   */
  // alt: "Upload",

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {Event} e Native change event
   */
  change(e) {
    this.args.onChange(this.files(e), this.resetInput.bind(this));
  }

  /**
   * Listens for change events on the native file input and dispatches
   * the corresponding action up the context chain.
   *
   * @private
   * @method
   * @param {Event} e Native change event
   */
  uploadManyFiles(e) {
    this.args.onUploadManyFiles(this.files(e), this.resetInput.bind(this));
  }

  /**
   * Resets the value of the input so you can select the same file
   * multiple times.
   *
   * @method
   */
  resetInput() {
    document.querySelector(`#${this.randomId} .x-file--input`).value = '';
  }

  /**
   * Generates a random ID to relate the label to the input.
   *
   * @method
   * @private
   */
  get randomId() {
    return Math.random().toString(36).substring(7);
  }

  /**
   * Gets files from event object.
   *
   * @method
   * @private
   * @param {Event}
   */
  files(e) {
    if (e.target.files) {
      return e.target.files;
    } else if (e.testingFiles) {
      return e.testingFiles;
    } else {
      // testingFiles will not exist on e
      // when it is a JQuery.Event
      return e.originalEvent.testingFiles;
    }
  }
}
