// AI Tutor Assistant Chat Widget - FINAL AUTO-DETECT version

function detectLessonId() {
    const bodyClass = document.body.className;
    const postMatch = bodyClass.match(/postid-(\d+)/);
    if (postMatch) return postMatch[1];

    const el = document.querySelector("[data-lesson-id]");
    if (el) return el.getAttribute("data-lesson-id");

    return "";
}

window.currentUser = {
    id: '',
    name: '',
    email: ''
};

window.ChatWidgetConfig = {
    webhook: {
        url: "https://gigwave24.app.n8n.cloud/webhook/c6eb7543-544e-4f61-83db-8ee944e3c457/chat",
        route: "general"
    },
    user: {
        id: window.currentUser?.id,
        name: window.currentUser?.name,
        email: window.currentUser?.email,
        lessonId: detectLessonId()
    },
    branding: {
        logo: "https://portman.university/wp-content/uploads/2025/06/Sophe-AI-Tutor-300x300.png",
        name: "Pauline",
        welcomeText: "👋 Hi! I’m your AI Tutor Assistant. Ask me anything about your course!",
        responseTimeText: "Online — reply in seconds"
    },
    style: {
        primaryColor: "#3256a8",
        secondaryColor: "#3256a8",
        position: "right",
        backgroundColor: "#ffffff",
        fontColor: "#1f2937"
    },
    suggestedQuestions: [
        "Can you explain this lesson?",
        "I don't understand the video.",
        "What should I study next?",
        "Give me practice questions",
        "Summarize this lesson for me"
    ],
    skipCollectUserDetails: true
};

(function () {
    if (window.N8nChatWidgetLoaded) return;
    window.N8nChatWidgetLoaded = true;

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/gigwave24/voice-stream-widget@main/chat-widget.js";
    document.body.appendChild(script);
})();
