export default {
    "type": "dynamic-web-services",
    "data": {
        "id": "services",
        "title_section": {
            "type": "dynamic-web-medium-text-content",
            "data": {
                "title": "++title",
                "content": "++subtitle"
            }
        },
        "text_content_sections": {
            "type": "dynamic-web-text-content-with-icon",
            "array_data": "texts",
            "data": {
                "icon_class": "++texts.icon_class",
                "title": "++texts.title",
                "content": "++texts.subtitle"
            }
        }
    }
}
