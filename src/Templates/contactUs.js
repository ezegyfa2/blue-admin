export default {
    "type": "dynamic-web-contact-form",
    "data": {
        "id": "contact_us",
        "url": "/contact-us",
        "title_section": {
            "type": "dynamic-web-white-medium-text-content",
            "data": {
                "title": "++title",
                "content": "++subtitle"
            }
        },
        "left_input_sections": {
            "type": "dynamic-web-input",
            "array_data": "left_inputs",
            "data": "++left_inputs"
        },
        "right_input_sections": {
            "type": "dynamic-web-fit-height-input",
            "array_data": "right_inputs",
            "data": "++right_inputs"
        },
        "button_title": "++button_title"
    }
}