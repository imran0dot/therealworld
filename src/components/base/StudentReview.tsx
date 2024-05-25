import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Img1 from '../../assets/reviews/students-wins-01-cut_1students-wins-01-cut.webp'
import Img2 from '../../assets/reviews/students-wins-02_1students-wins-02.webp'
import Img3 from '../../assets/reviews/students-wins-03_1students-wins-03.webp'
import Img4 from '../../assets/reviews/students-wins-04_1students-wins-04.webp'
import Img5 from '../../assets/reviews/students-wins-05_1students-wins-05.webp'
import Img6 from '../../assets/reviews/students-wins-06_1students-wins-06.webp'
import Img7 from '../../assets/reviews/students-wins-07_1students-wins-07.webp'
import Img8 from '../../assets/reviews/students-wins-08_1students-wins-08.webp'
import Img9 from '../../assets/reviews/students-wins-09_1students-wins-09.webp'
import Img10 from '../../assets/reviews/students-wins-10_1students-wins-10.webp'
import Img11 from '../../assets/reviews/students-wins-11_1students-wins-11.webp'
import Img12 from '../../assets/reviews/students-wins-12_1students-wins-12.webp'
import GiantButton from '../ui/GiantButton';


const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12]

const StudentReview: React.FC = () => {
    return (
        <div>
            <div className='relative md:h-[150vh] overflow-hidden my-10'>
                <Container>
                    <div className='text-center my-10'>
                        <MainTitle
                            subTitle="THE REAL WORLD WINS"
                            title="OUR STUDENTS ARE WINNING"
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
                        <div>
                            {
                                images.slice(0, 4).map(image => <img className=' w-full rounded-lg border-2 border-opacity-55 border-transparent hover:border-secondary-border' key={image} src={image} />)
                            }
                        </div>

                        <div>
                            {
                                images.slice(4, 8).map(image => <img className=' w-full rounded-lg border-2 border-opacity-55 border-transparent hover:border-secondary-border' key={image} src={image} />)
                            }
                        </div>

                        <div>
                            {
                                images.slice(8, 12).map(image => <img className=' w-full rounded-lg border-2 border-opacity-55 border-transparent hover:border-secondary-border' key={image} src={image} />)
                            }
                        </div>
                    </div>
                </Container>

                <div className=' absolute bottom-0 h-1/6 md:h-1/2 w-full bg-gradient-to-t from-primary-background to-transparent'></div>
            </div >

            <div>
                <GiantButton smallText>Join The Real World</GiantButton>
            </div>
        </div>
    );
};

export default StudentReview;