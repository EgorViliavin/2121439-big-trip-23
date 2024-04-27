import { BUTTON_OFFERS } from '../../../const';
import { createElement } from '../../../render';

const createFormButtonOffersElement = () => BUTTON_OFFERS.map((item) => ` <div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${
  item.value
}-1" type="checkbox" name="event-offer-${item.value}" ${
  item.isChecked ? 'checked' : ''
}>
                <label class="event__offer-label" for="event-offer-${
  item.value
}-1">
                  <span class="event__offer-title">${item.title}</span>
                  +€&nbsp;
                  <span class="event__offer-price">${item.price}</span>
                </label>
              </div>
            `);

const createFormButtonOffersTemplate = () => `<section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                  ${createFormButtonOffersElement().join('')}
              </div>
          </section>`;

export default class FormOffers {
  getTemplate() {
    return createFormButtonOffersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
