export default {
    "type": "blue-admin-navigation-bar",
    "data": {
        "left_item_sections": [
            {
                "type": "blue-admin-navigation-search",
                "data": {
                    "placeholder": "--search_placeholder"
                }
            }
        ],
        "navigation_link_sections": [
            {
                "template_type_name": "notificationsLink",
                "params": {
                    "header_title": "++notification_link.header_title",
                    "notifications": "++notification_link.notifications",
                    "footer_link": {
                        "url": "/notifications",
                        "content": "footer_link.content"
                    },
                    "badge_content": "++notification_link.notificaton_count"
                }
            },
            {
                "type": "blue-admin-dropdown-navigation-link",
                "data": {
                    "added_classes": {
                        "root": "d-sm-none"
                    },
                    "dropdown_section": {
                        "type": "blue-admin-list-dropdown-with-edges",
                        "data": {
                            "added_classes": {
                                "root": "p-3"
                            },
                            "dropdown_item_sections": [
                                {
                                    "type": "blue-admin-search-dropdown-item",
                                    "data": {
                                        "placeholder": "Search for..."
                                    }
                                }
                            ]
                        }
                    },
                    "icon_class": "fas fa-search fa-fw"
                }
            },
            {
                "type": "blue-admin-dropdown-navigation-link",
                "data": {
                    "image_url": "images/undraw_rocket.svg",
                    "title": "Ezegy fa",
                    "dropdown_section": {
                        "type": "blue-admin-list-dropdown",
                        "data": {
                            "dropdown_item_sections": [
                                {
                                    "type": "blue-admin-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "User"
                                    }
                                },
                                {
                                    "type": "blue-admin-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "Settings"
                                    }
                                },
                                {
                                    "type": "blue-admin-link-dropdown-item",
                                    "data": {
                                        "url": "#",
                                        "icon_class": "fas fa-file-alt text-white",
                                        "content": "Logout"
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    }
}
