export default {
    "type": "landing-page",
    "data": {
        "navbar_section": {
            "template_path": "navbar",
            "params": {
                "current_language": "++current_language",
                "links": [
                    {
                        "url": "#offers",
                        "content": "++navbar.offers"
                    },
                    {
                        "url": "#services",
                        "content": "++navbar.services"
                    },
                    {
                        "url": "#contact_us",
                        "content": "++navbar.contact_us"
                    }
                ],
                "languages": "++navbar.languages"
            }
        },
        "header_section": {
            "template_path": "header",
            "params": {
                "title": "++header.title",
                "content": "++header.content",
                "button": {
                    "title": "++header.button.title",
                    "url": "#offers"
                }
            }
        },
        "content_sections": [
            {
                "type": "dynamic-web-success-session-message",
                "data": {
                    "content": "++success_message.content",
                    "is_visible": "++success_message.is_visible"
                }
            },
            {
                "template_path": "offers",
                "params": {
                    "offers": [
                        {
                            "title": "++offers.basic.title",
                            "content": "++offers.basic.content",
                            "parts": [
                                "++offers.basic.parts.responsive_layouts",
                                "++offers.basic.parts.modern_design",
                                "++offers.basic.parts.user_friendly",
                                "++offers.basic.parts.admin_panel",
                                "++offers.basic.parts.product_list",
                                "++offers.basic.parts.seo_optimizing"
                            ]
                        },
                        {
                            "title": "++offers.normal.title",
                            "content": "++offers.normal.content",
                            "parts": [
                                "++offers.normal.parts.basic_parts",
                                "++offers.normal.parts.many_product",
                                "++offers.normal.parts.product_categories",
                                "++offers.normal.parts.product_filters",
                                "++offers.normal.parts.users"
                            ]
                        },
                        {
                            "title": "++offers.premium.title",
                            "content": "++offers.premium.content",
                            "parts": [
                                "++offers.premium.parts.normal_parts",
                                "++offers.premium.parts.marketing",
                                "++offers.premium.parts.optmizing",
                                "++offers.premium.parts.custom_design",
                                "++offers.premium.parts.reports"
                            ]
                        }
                    ],
                    "button_title": "++offers.button_title"
                }
            },
            {
                "template_path": "services",
                "params": {
                    "title": "++services.title",
                    "subtitle": "++services.subtitle",
                    "texts": [
                        {
                            "icon_class": "fa-solid fa-globe",
                            "title": "++services.site_building.title",
                            "subtitle": "++services.site_building.subtitle"
                        },
                        {
                            "icon_class": "fa-solid fa-bullhorn",
                            "title": "++services.marketing.title",
                            "subtitle": "++services.marketing.subtitle"
                        },
                        {
                            "icon_class": "fas fa-chart-line",
                            "title": "++services.optimization.title",
                            "subtitle": "++services.optimization.subtitle"
                        }
                    ]
                }
            }
        ],
        "contact_section": {
            "template_path": "contactUs",
            "params": {
                "title": "++contact_us.title",
                "subtitle": "++contact_us.subtitle",
                "left_inputs": "++contact_us.left_inputs",
                "right_inputs": "++contact_us.right_inputs",
                "button_title": "++contact_us.button_title"
            }
        },
        "footer_section": {
            "template_path": "footer",
            "params": {
                "icons": [
                    {
                        "url": "",
                        "icon_class": "fab fa-facebook-f"
                    },
                    {
                        "url": "",
                        "icon_class": "fab fa-linkedin-in"
                    }
                ],
                "privacy_policy": {
                    "url": "",
                    "content": "++footer.privacy_policy"
                },
                "copyright": {
                    "company_name": "++footer.copyright.company_name",
                    "content": "++footer.copyright.content"
                }
            }
        }
    }
}
