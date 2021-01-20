/*!
 * ASP.NET SignalR JavaScript Library v2.1.2
 * http://signalr.net/
 *
 * Copyright Microsoft Open Technologies, Inc. All rights reserved.
 * Licensed under the Apache 2.0
 * https://github.com/SignalR/SignalR/blob/master/LICENSE.md
 *
 */

/// <reference path="..\..\SignalR.Client.JS\Scripts\jquery-1.6.4.js" />
/// <reference path="jquery.signalR.js" />
(function ($, window, undefined) {
    /// <param name="$" type="jQuery" />
    "use strict";

    if (typeof ($.signalR) !== "function") {
        throw new Error("SignalR: SignalR is not loaded. Please ensure jquery.signalR-x.js is referenced before ~/signalr/js.");
    }

    var signalR = $.signalR;

    function makeProxyCallback(hub, callback) {
        return function () {
            // Call the client hub method
            callback.apply(hub, $.makeArray(arguments));
        };
    }

    function registerHubProxies(instance, shouldSubscribe) {
        var key, hub, memberKey, memberValue, subscriptionMethod;

        for (key in instance) {
            if (instance.hasOwnProperty(key)) {
                hub = instance[key];

                if (!(hub.hubName)) {
                    // Not a client hub
                    continue;
                }

                if (shouldSubscribe) {
                    // We want to subscribe to the hub events
                    subscriptionMethod = hub.on;
                } else {
                    // We want to unsubscribe from the hub events
                    subscriptionMethod = hub.off;
                }

                // Loop through all members on the hub and find client hub functions to subscribe/unsubscribe
                for (memberKey in hub.client) {
                    if (hub.client.hasOwnProperty(memberKey)) {
                        memberValue = hub.client[memberKey];

                        if (!$.isFunction(memberValue)) {
                            // Not a client hub function
                            continue;
                        }

                        subscriptionMethod.call(hub, memberKey, makeProxyCallback(hub, memberValue));
                    }
                }
            }
        }
    }

    $.hubConnection.prototype.createHubProxies = function () {
        var proxies = {};
        this.starting(function () {
            // Register the hub proxies as subscribed
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, true);

            this._registerSubscribedHubs();
        }).disconnected(function () {
            // Unsubscribe all hub proxies when we "disconnect".  This is to ensure that we do not re-add functional call backs.
            // (instance, shouldSubscribe)
            registerHubProxies(proxies, false);
        });

        proxies['msgHub'] = this.createHubProxy('msgHub'); 
        proxies['msgHub'].client = { };
        proxies['msgHub'].server = {
            adminCon: function (sessionId, prjcode) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminCon"], $.makeArray(arguments)));
             },

            adminFastMsg: function () {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminFastMsg"], $.makeArray(arguments)));
             },

            adminGetNoList: function () {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminGetNoList"], $.makeArray(arguments)));
             },

            adminLeave: function () {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminLeave"], $.makeArray(arguments)));
             },

            adminMsgList: function () {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminMsgList"], $.makeArray(arguments)));
             },

            adminPostMsg: function (no, isImg, Content) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminPostMsg"], $.makeArray(arguments)));
             },

            adminRead: function (no) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["AdminRead"], $.makeArray(arguments)));
             },

            closeNo: function (no) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["CloseNo"], $.makeArray(arguments)));
             },

            test: function () {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["Test"], $.makeArray(arguments)));
             },

            userGetMsgList: function (wayId, a) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["UserGetMsgList"], $.makeArray(arguments)));
             },

            userInWay: function (wayId, userid, prjcode) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["UserInWay"], $.makeArray(arguments)));
             },

            userPostMsg: function (obj) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["UserPostMsg"], $.makeArray(arguments)));
             },

            userRead: function (wayId) {
                return proxies['msgHub'].invoke.apply(proxies['msgHub'], $.merge(["UserRead"], $.makeArray(arguments)));
             }
        };

        return proxies;
    };

    signalR.hub = $.hubConnection("/signalr", { useDefaultPath: false });
    $.extend(signalR, signalR.hub.createHubProxies());

}(window.jQuery, window));