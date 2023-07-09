export default {
    "type": "blue-admin-page",
    "data": {
        "sidebar_section": {
            "template_type_name": "blue_admin_sidebar",
            "params": {
                "sidebar_sections": "++sidebar_sections"
            }
        },
        "navigation_bar_section": {
            "template_type_name": "blue_admin_navigationBar"
        },
        "success_message_sections": {
            "type": "blue-admin-success-session-message",
            "array_data": "success_messages",
            "data": {
                "content": "++success_messages"
            }
        },
        "error_message_sections": {
            "type": "blue-admin-error-session-message",
            "array_data": "error_messages",
            "data": {
                "content": "++error_messages"
            }
        },
        "warning_message_sections": {
            "type": "blue-admin-warning-session-message",
            "array_data": "warning_messages",
            "data": {
                "content": "++warning_messages"
            }
        },
        "info_message_sections": {
            "type": "blue-admin-info-session-message",
            "array_data": "info_messages",
            "data": {
                "content": "++info_messages"
            }
        },
        "content_sections": [
            {
                "type": "blue-admin-centered-content",
                "data": {
                    "content_sections": "++content_sections"
                }
            }
        ]
    }
}
