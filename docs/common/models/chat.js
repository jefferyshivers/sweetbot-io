"use strict";

module.exports = Chat => {
  const responses = {
    "Just browsing": {
      message: "Cool, have fun!",
      meta: {
        endpoint: {
          path: "chats/message/browsing",
          failureResponse:
            "Sorry, I don't have much else to say yet - I'm still being setup!"
        }
      }
    },
    "Prospective user": {
      message: "Awesome, thanks for checking this out then!",
      meta: {}
    },
    "Already using sweetbot": {
      message: "Sweet - having fun?",
      meta: {}
    }
  };

  Chat.message = (message, meta, cb) => {
    const response = responses[message]
      ? responses[message]
      : { message: "Oops something went wrong", meta: {} };

    cb(null, response.message, response.meta);
  };

  Chat.remoteMethod("message", {
    accepts: [
      {
        arg: "message",
        type: "string"
      },
      {
        arg: "meta",
        type: "object"
      }
    ],
    returns: [
      {
        arg: "message",
        type: "string"
      },
      {
        arg: "meta",
        type: "object"
      }
    ]
  });
};
