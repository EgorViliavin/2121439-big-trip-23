export const SORT_VALUES = [
  {
    value: 'Day',
    isChecked: true,
  },
  {
    value: 'Event',
    isDisabled: true,
  },
  {
    value: 'Time',
    isChecked: false,
  },
  {
    value: 'Price',
    isChecked: false,
  },
  {
    value: 'Offers',
    isDisabled: true,
  },
];

export const FormType = {
  FORM_EDIT: 'form-edit',
  FORM_ADD: 'form-add',
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export const FILTER_VALUES = ['Everything', 'Future', 'Present', 'Past'];

export const MILLISECONDS = 60000;
export const MINUTES = 60;
export const DATE_NOW = new Date().toISOString();
export const DAYS_TIME = 24;

export const FilterType = {
  EVERYTHING: 'Everything',
  PAST: 'Past',
  PRESENT: 'Present',
  FUTURE: 'Future',
};

export const TimeFormat = {
  SIMPLE_TIME_FORMAT: 'hh:mm', // Время маршрута отображается в формате начало — окончание (например, «10:30 — 11:00»)
  FORMAT_DATE_FROM: 'MMM DD', // Сокращенное название месяца, День месяца, двухзначное число
  FORMAT_DATE_FOR_FORM_EDIT: 'YY/MM/DD HH:mm', // 18/03/19 12:25
  // Формат продолжительности нахождения в точке маршрута зависит от длительности:
  FORMAT_MINUTES: 'mm[M]', // Менее часа: минуты (например, 23M);
  FORMAT_ONE_DAY: 'HH[H] mm[M]', // Менее суток: часы минуты (например, 02H 44M или 12H 00M, если минуты равны нулю);
  FORMAT_DAYS: 'DD[D] HH[H] mm[M]', // Более суток: дни часы минуты (например, 51D 02H 30M или 07D 00H 00M, если часы и/или минуты равны нулю).
};

export const TimeInMilliseconds = {
  HOUR: 3600000,
  DAY: 86400000,
};
