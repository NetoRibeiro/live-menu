# Review Metadata Integration Guide

## Overview

The `menu.json` file now includes review-related fields for each product. These fields are designed to be populated by a third-party application and displayed on the menu.

## New Fields

Each product now has three additional fields:

### 1. `reviewCount` (Number)
- **Type**: Integer
- **Default**: `0`
- **Description**: Total number of reviews for this product
- **Example**: `142`

### 2. `averageRating` (Number)
- **Type**: Float (0.0 - 5.0)
- **Default**: `0`
- **Description**: Average star rating from all reviews
- **Example**: `4.5`
- **Display**: Show as stars (★★★★☆)

### 3. `priceRange` (String)
- **Type**: String
- **Default**: `"$"`, `"$$"`, or `"$$$"`
- **Description**: Price range indicator
- **Values**:
  - `"$"` = Budget-friendly (< $15)
  - `"$$"` = Moderate ($15-$35)
  - `"$$$"` = Premium (> $35)

## JSON Structure

```json
{
  "id": "prod_steak",
  "name": "Ribeye Steak",
  "price": "$45.00",
  "description": "Premium grass-fed ribeye...",
  "image": "assets/images/products/steak.jpg",
  "video": "assets/videos/steak.mp4",
  "reviewCount": 0,
  "averageRating": 0,
  "priceRange": "$$$"
}
```

## Current Default Values

All products currently have placeholder values:

| Product | reviewCount | averageRating | priceRange |
|---------|-------------|---------------|------------|
| Classic Bruschetta | 0 | 0 | $ |
| Crispy Calamari | 0 | 0 | $ |
| Ribeye Steak | 0 | 0 | $$$ |
| Pan Seared Salmon | 0 | 0 | $$ |
| Truffle Mushroom Pasta | 0 | 0 | $$ |
| New York Cheesecake | 0 | 0 | $ |

## Third-Party Integration

### API Endpoint (Example)
Your third-party application should update these fields via an API:

```javascript
// Example: Update product reviews
PATCH /api/products/{productId}
{
  "reviewCount": 142,
  "averageRating": 4.5,
  "priceRange": "$$$"
}
```

### Batch Update (Example)
For updating multiple products at once:

```javascript
// Example: Batch update
POST /api/products/batch-update
{
  "products": [
    {
      "id": "prod_steak",
      "reviewCount": 142,
      "averageRating": 4.5
    },
    {
      "id": "prod_salmon",
      "reviewCount": 89,
      "averageRating": 4.2
    }
  ]
}
```

## Display Recommendations

### Product Card Layout

```
┌─────────────────────────────┐
│                             │
│      [Product Image]        │
│                             │
├─────────────────────────────┤
│ Ribeye Steak          $45.00│
│ ★★★★☆ 4.5 (142)       $$$  │
│                             │
│ Premium grass-fed ribeye... │
└─────────────────────────────┘
```

### Star Rating Display
- Use filled stars (★) for full ratings
- Use half stars (⯨) for .5 ratings
- Use empty stars (☆) for remaining

**Examples:**
- 4.5 → ★★★★⯨
- 3.0 → ★★★☆☆
- 5.0 → ★★★★★

### Review Count Display
- Show count in parentheses: `(142)`
- If count is 0, show "No reviews yet"
- If count > 1000, show as "1k+", "2.5k+", etc.

### Price Range Display
- Show dollar signs: `$`, `$$`, `$$$`
- Optional: Add tooltip on hover
  - `$` = "Budget-friendly"
  - `$$` = "Moderate"
  - `$$$` = "Premium"

## UI Implementation

The app.js file needs to be updated to display these fields. See the updated `renderProducts()` function in the implementation guide.

## Data Validation

When your third-party app updates these fields, ensure:

### reviewCount
- ✅ Must be >= 0
- ✅ Must be an integer
- ❌ Cannot be negative

### averageRating
- ✅ Must be between 0.0 and 5.0
- ✅ Can have decimal places (e.g., 4.5)
- ❌ Cannot exceed 5.0

### priceRange
- ✅ Must be one of: `"$"`, `"$$"`, `"$$$"`
- ❌ Cannot be empty or other values

## Example: Populated Data

```json
{
  "id": "prod_steak",
  "name": "Ribeye Steak",
  "price": "$45.00",
  "description": "Premium grass-fed ribeye, seared to your liking.",
  "image": "assets/images/products/steak.jpg",
  "video": "assets/videos/steak.mp4",
  "reviewCount": 142,
  "averageRating": 4.5,
  "priceRange": "$$$"
}
```

**Display:**
```
Ribeye Steak                           $45.00
★★★★⯨ 4.5 (142 reviews)                $$$

Premium grass-fed ribeye, seared to your liking.
Served with roasted garlic mashed potatoes and asparagus.
```

## Testing

### Manual Testing
1. Update a product's review fields in `menu.json`
2. Reload the app
3. Verify the review information displays correctly

### Example Test Data
```json
{
  "reviewCount": 142,
  "averageRating": 4.5,
  "priceRange": "$$$"
}
```

## Future Enhancements

Consider adding:
- Individual review comments
- Review timestamps
- Reviewer names/avatars
- Dietary tags (vegan, gluten-free, etc.)
- Allergen information
- Nutritional data

---

**Note:** The UI currently does not display these fields. You'll need to update `webapp/js/app.js` to render the review information on product cards.
