import React from 'react';

var Button = function Button(_ref) {
  var _ref$buttonWord = _ref.buttonWord,
      buttonWord = _ref$buttonWord === void 0 ? 'defaultWord' : _ref$buttonWord;
  return /*#__PURE__*/React.createElement("div", {
    className: "kikko-button"
  }, buttonWord);
};

export { Button as default };
