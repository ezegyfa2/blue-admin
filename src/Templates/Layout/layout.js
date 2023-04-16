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
        "content_sections": [
            {
                "type": "blue-admin-centered-content",
                "data": {
                    "content_sections": [
                        {
                            "type": "blue-admin-success-session-message",
                            "array_data": "success_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "++success_messages"
                            }
                        },
                        {
                            "type": "blue-admin-error-session-message",
                            "array_data": "error_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "++error_messages"
                            }
                        },
                        {
                            "type": "blue-admin-warning-session-message",
                            "array_data": "warning_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "++warning_messages"
                            }
                        },
                        {
                            "type": "blue-admin-info-session-message",
                            "array_data": "info_messages",
                            "merge_to_parent": true,
                            "data": {
                                "content": "++info_messages"
                            }
                        },
                        {
                            "array_data": "content_sections",
                            "merge_to_parent": true,
                            "direct_paste": true
                        }
                    ]
                }
            }
        ]
    }
}
