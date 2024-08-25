export default {
  "tasks": {
    "bind": [
      "isOwner",
      "auth.id == data.creatorId"
    ],
    "allow": {
      "view": "isOwner",
      "create": "isOwner",
      "delete": "isOwner",
      "update": "isOwner"
    }
  },
  "sessions": {
    "bind": [
      "isOwner",
      "auth.id == data.creatorId"
    ],
    "allow": {
      "view": "isOwner",
      "create": "isOwner",
      "delete": "isOwner",
      "update": "isOwner"
    }
  }
};