export default {
    "type": "dynamic-web-offer-container",
    "data": {
        "id": "offers",
        "column_sections": [
            {
                "type": "dynamic-web-offer",
                "array_data": "offers",
                "merge_to_parent": true,
                "data": {
                    "title_section": {
                        "type": "dynamic-web-middle-line-text-content",
                        "data": {
                            "title": "++offers.title",
                            "content": "++offers.content"
                        }
                    },
                    "offer_parts": "++offers.parts",
                    "button_title": "++button_title",
                    "button_link": "#contact_us"
                }
            }
        ]
    }
}