# Forms: set|getRecord API

## Forms model

You may access the current root (a.k.a. top-most) Forms model via:

```javascript
BMP.Forms.current;
```

### `form#getRecord() -> Promise(Object)`

- @returns {Promise} resolved with an {Object} containing the record data

The output data structure matches the input structure expected for
`form@setRecord()` below.

#### blob types

We recommend that you read [our BlobUploader documentation](https://github.com/blinkmobile/forms/blob/v1.3.1/docs/blob-uploader.md)
as it covers useful related details.


### `form#setRecord(Object) -> Promise()`

- @param {Object} record data to populate the model(s)
- @returns {Promise} resolved after updating all Element models

#### sub-forms

```javascript
BMP.Forms.current.setRecord({
  name: 'Harry Potter',
  comments: [
    {
      timestamp: '2015-01-01T12:30:00.000Z',
      comment: 'too much whining'
    },
    {
      timestamp: '2015-02-02T17:45:00.000Z',
      comment: 'get a haircut'
    }
  ]
}).then(/* ... */);
```

#### blob types

See the blob section under `form#getRecord()` for more details.

For example:

```javascript
// record with a fresh blob (not saved on the server)
BMP.Forms.current.setRecord({
  photo: '...hoCzSOw9eBptzoqIbefMH7wRbAo=', // Base64 image data
  photo_mimetype: 'image/jpeg',
  photo_height: 480,
  photo_width: 640
}).then(/* ... */);

// record with an uploaded blob (saved on the server)
BMP.Forms.current.setRecord({
  photo: '...hoCzSOw9eBptzoqIbefMH7wRbAo=', // Base64 image thumbnail data
  photo_mimetype: 'image/jpeg',
  photo_height: 240,
  photo_width: 320,
  photo_uuid: '433B1105-D01E-4041-ABEA-EA455E076B07' // blob reference
}).then(/* ... */);
```
