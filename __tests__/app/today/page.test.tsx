// // make a request test with jest to this url  which must return this object 

// import { render, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import Page from '../../../src/app/today/page';

// const mockResponse = { "copyright": "Harri Kiiskinen", "date": "2024-01-25", "explanation": "You might not immediately recognize this street map of a neighborhood in Jyv\u00e4skyl\u00e4, Finland, planet Earth. But that's probably because the map was projected into the night sky and captured with an allsky camera on January 16. The temperature recorded on that northern winter night was around minus 20 degrees Celsius. As ice crystals formed in the atmosphere overhead, street lights spilling illumination into the sky above produced visible light pillars, their ethereal appearance due to specular reflections from the fluttering crystals' flat surfaces. Of course, the projected light pillars trace a map of the brightly lit local streets, though reversed right to left in the upward looking camera's view. This light pillar street map was seen to hover for hours in the Jyv\u00e4skyl\u00e4 night.", "hdurl": "https://apod.nasa.gov/apod/image/2401/image-20240116164558_v1.jpg", "media_type": "image", "service_version": "v1", "title": "Jyv\u00e4skyl\u00e4 in the Sky", "url": "https://apod.nasa.gov/apod/image/2401/image-20240116164558_v11024.jpg" }

// // make a test request to this url and see if it returns the mockResponse Object

// const server = setupServer(
//     rest.get('https://api.nasa.gov/planetary/apod', (req, res, ctx) => {
//         return res(ctx.json(mockResponse))
//     })
// )

