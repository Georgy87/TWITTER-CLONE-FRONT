"use strict";
exports.__esModule = true;
exports.Tweet = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var ChatBubbleOutlineOutlined_1 = require("@material-ui/icons/ChatBubbleOutlineOutlined");
var RepeatOutlined_1 = require("@material-ui/icons/RepeatOutlined");
var FavoriteBorderOutlined_1 = require("@material-ui/icons/FavoriteBorderOutlined");
var ReplyOutlined_1 = require("@material-ui/icons/ReplyOutlined");
var MoreVert_1 = require("@material-ui/icons/MoreVert");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var formatDate_1 = require("../utils/formatDate");
exports.Tweet = function (_a) {
    var id = _a.id, text = _a.text, user = _a.user, classes = _a.classes, createdAt = _a.createdAt;
    var _b = react_1["default"].useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var history = react_router_dom_1.useHistory();
    var handleClickTweet = function (event) {
        event.preventDefault();
        history.push("/home/tweet/" + id);
    };
    var handleClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1["default"].createElement("a", { onClick: handleClickTweet, className: classes.tweetWrapper, href: "/home/tweet/" + id },
        react_1["default"].createElement(core_1.Paper, { className: classnames_1["default"](classes.tweet, classes.tweetsHeader), variant: "outlined" },
            react_1["default"].createElement(core_1.Avatar, { className: classes.tweetAvatar, alt: "\u0410\u0432\u0430\u0442\u0430\u0440\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F " + user.fullname, src: user.avatarUrl }),
            react_1["default"].createElement("div", { className: classes.tweetContent },
                react_1["default"].createElement(core_1.Typography, { className: classes.tweetHeader },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("b", null, user.fullname),
                        "\u00A0",
                        react_1["default"].createElement("span", { className: classes.tweetUserName },
                            "@",
                            user.username),
                        "\u00A0",
                        react_1["default"].createElement("span", { className: classes.tweetUserName }, "\u00B7"),
                        "\u00A0",
                        react_1["default"].createElement("span", { className: classes.tweetUserName }, formatDate_1.formDate(new Date(createdAt)))),
                    react_1["default"].createElement("div", { className: classes.tweetPopupMenu },
                        react_1["default"].createElement(core_1.IconButton, { "aria-label": "more", "aria-controls": "long-menu", "aria-haspopup": "true", onClick: handleClick },
                            react_1["default"].createElement(MoreVert_1["default"], null)),
                        react_1["default"].createElement(core_1.Menu, { id: "long-menu", anchorEl: anchorEl, keepMounted: true, open: open, onClose: handleClose },
                            react_1["default"].createElement(core_1.MenuItem, { onClick: handleClose }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"),
                            react_1["default"].createElement(core_1.MenuItem, { onClick: handleClose }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0432\u0438\u0442")))),
                react_1["default"].createElement(core_1.Typography, { variant: "body1", gutterBottom: true }, text),
                react_1["default"].createElement("div", { className: classes.tweetFooter },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.IconButton, null,
                            react_1["default"].createElement(ChatBubbleOutlineOutlined_1["default"], { style: { fontSize: 20 } })),
                        react_1["default"].createElement("span", null, "1")),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.IconButton, null,
                            react_1["default"].createElement(RepeatOutlined_1["default"], { style: { fontSize: 20 } }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.IconButton, null,
                            react_1["default"].createElement(FavoriteBorderOutlined_1["default"], { style: { fontSize: 20 } }))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(core_1.IconButton, null,
                            react_1["default"].createElement(ReplyOutlined_1["default"], { style: { fontSize: 20 } }))))))));
};
