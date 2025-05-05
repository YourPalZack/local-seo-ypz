# API Reference

## Generate Prompt Endpoint
- **POST** `/api/generate`
- **Body**:
  ```json
  {
    "template": "blog-outline",
    "keywords": ["local seo", "plumbing"],
    "audience": "homeowners",
    "word_count": 1500
  }
  ```

## Settings Endpoint
- **GET** `/api/settings`
- **POST** `/api/settings`
  - `temperature`, `max_tokens`, `stop_sequences`

