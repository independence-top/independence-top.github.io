(function () {
  let Keydown = {
    ENTER: 13,
    ESC: 27
  };

  let Selector = {
    FEEDBACK_OPEN: `.horizontal-menu__question a`,
    FEEDBACK_CLOSE: `.feedback__close`,
    FEEDBACK: `.feedback`,
    OVERLAY: `.overlay`,
    FEEDBACK_NAME: `.feedback input[name=name]`,
    FEEDBACK_EMAIL: `.feedback input[name=email]`,
    TEXTAREA: `.feedback textarea`,
  };

  let Class = {
    FEEDBACK_SHOW: `feedback--show`,
    FEEDBACK_ERROR: `feedback--error`,
    OVERLAY_SHOW: `overlay--show`,
  };

  let feedbackOpen = document.querySelector(Selector.FEEDBACK_OPEN);
  let feedbackClose = document.querySelector(Selector.FEEDBACK_CLOSE);
  let feedback = document.querySelector(Selector.FEEDBACK);
  let feedbackName = document.querySelector(Selector.FEEDBACK_NAME);
  let feedbackEmail = document.querySelector(Selector.FEEDBACK_EMAIL);
  let feedbackTextarea = document.querySelector(Selector.TEXTAREA);
  let overlay = document.querySelector(Selector.OVERLAY);

  let onCloseFeedback = function (evt) {
    evt.preventDefault();
    feedback.classList.remove(Class.FEEDBACK_SHOW);
    overlay.classList.remove(Class.OVERLAY_SHOW);
    feedbackClose.removeEventListener(`click`, onCloseFeedback);
    feedbackClose.removeEventListener(`keydown`, onCloseFeedbackPressEnter);
    window.removeEventListener(`keydown`, onCloseFeedbackPressEsc);
    feedbackOpen.addEventListener(`click`, onOpenFeedback);
    feedbackOpen.addEventListener(`keydown`, onFeedbackOpenPressEnter);
  };

  let onCloseFeedbackPressEsc = function (evt) {
    if (evt.keyCode === Keydown.ESC) {
      onCloseFeedback(evt);
    }
  };

  let onCloseFeedbackPressEnter = function (evt) {
    if (evt.keyCode === Keydown.ENTER) {
      onCloseFeedback(evt);
    }
  };

  let delClassAnimation = function () {
    feedback.classList.remove(Class.FEEDBACK_ANIMATION);
  };

  let onOpenFeedback = function (evt) {
    evt.preventDefault();
    feedbackOpen.removeEventListener(`click`, onOpenFeedback);
    feedbackOpen.removeEventListener(`keydown`, onFeedbackOpenPressEnter);
    feedback.classList.add(Class.FEEDBACK_SHOW);
    feedback.classList.add(Class.FEEDBACK_ANIMATION);
    setTimeout(delClassAnimation, 500);
    overlay.classList.add(Class.OVERLAY_SHOW);
    feedbackClose.addEventListener(`click`, onCloseFeedback);
    feedbackClose.addEventListener(`keydown`, onCloseFeedbackPressEnter);
    window.addEventListener(`keydown`, onCloseFeedbackPressEsc);
  };

  let onFeedbackOpenPressEnter = function (evt) {
    if (evt.keyCode === Keydown.ENTER) {
      onOpenFeedback(evt);
    }
  };

  let delClassError = function () {
    feedback.classList.remove(Class.FEEDBACK_ERROR);
  };

  feedbackOpen.addEventListener(`click`, onOpenFeedback);
  feedbackOpen.addEventListener(`keydown`, onFeedbackOpenPressEnter);

  feedback.addEventListener(`submit`, function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackTextarea.value) {
      evt.preventDefault();
      feedback.classList.toggle(Class.FEEDBACK_ERROR, false);
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add(Class.FEEDBACK_ERROR);
      setTimeout(delClassError, 500);
    }
  });
})();

(function () {
  let toggle = document.querySelector(`.horizontal-menu__toggle`);
  let content = document.querySelector(`.content-wrapper`);
  const MIN_WIDTH = 768;

  toggle.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    content.classList.toggle(`content-wrapper--opened`);
    content.classList.toggle(`content-wrapper--not-jeking`, false);
  });

  window.addEventListener(`resize`, () => {
    let widthWindow = document.documentElement.clientWidth;
    if (widthWindow > MIN_WIDTH && content.classList.contains(`content-wrapper--opened`)) {
      content.classList.add(`content-wrapper--not-jeking`);
    }
  });
})();

/* eslint-disable */
(function () {
  let swiper = new Swiper(`.swiper-container`, {
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class=${className}>${index + 1}</span>`;
      },
    },
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
  });
})();
