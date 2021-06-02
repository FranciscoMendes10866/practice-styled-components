import Mansory from 'react-masonry-css'

import { Card } from '../components'

const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
}

const About = () => {
    return (
        <Mansory
            breakpointCols={breakpointColumns}
            className="my-masonry-grid App"
            columnClassName="my-masonry-grid_column"
        >
            <div>
                <Card />
            </div>
        </Mansory>
    );
}

export default About;