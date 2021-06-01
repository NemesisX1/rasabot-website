!(function() {
    let e = document.createElement("script"),
        t = document.head || document.getElementsByTagName("head")[0];
    (e.src =
        "https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.0/lib/index.js"),
    (e.async = !0),
    (e.onload = () => {
        window.WebChat.default({
                customData: {
                    language: "fr",
                    title: "Pi Bot"
                },
                socketUrl: "https://bf-botfront.development.agents.botfront.cloud",
                // add other props here
            },
            null
        );
    }),
    t.insertBefore(e, t.firstChild);
})();