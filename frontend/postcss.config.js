// export default {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// }

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        tailwindcss,
        autoprefixer
    ]
}

// module.exports = {
//     plugins: [
//         require('@tailwindcss/postcss'),
//         // other plugins...
//     ],
// }
