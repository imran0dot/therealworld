import React from 'react';
import Container from '../shared/Container';
import MainTitle from '../shared/MainTitle';
import Accordion from '../shared/Accordion';

const Faq: React.FC = () => {
    return (
        <div>
            <Container>
                <div className='text-center mb-10'>
                    <MainTitle title="FREQUENTLY ASKED QUESTIONS" />
                </div>

                <div className='flex flex-col gap-5 md:mx-28'>
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                    <Accordion heading='Is this program suitable for women?' content={<>
                        <p><strong>THE REAL WORLD </strong>is suitable for any person, regardless of gender, who aspire to learn.</p>
                        <p><strong>THE REAL WORLD </strong> has a very large female membership base and have made some of our greatest success stories!</p>
                    </>}
                    />
                </div>
            </Container>
        </div>
    );
};

export default Faq;