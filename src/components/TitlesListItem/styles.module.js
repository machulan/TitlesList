import styled from 'styled-components';

export const Row = styled.div`
    background-color: #555;
    margin-top: 5px;
    position: relative;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
`;

export const FirstBackgroundLayer = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    width: 270px;
    height: 100%;
    background-color: #333;
    transform: skew(15deg);
`;

export const SecondBackgroundLayer = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    width: 250px;
    height: 100%;
    background-color: #ddd;
    transform: skew(20deg);
`;

export const TitleLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #ddd;
`;

export const PublicationPlaceLayer = styled.div`
    position: absolute;
    top: 25px;
    left: 0;
    width: 375px;
    height: 30px;
    background-color: #905;
    color: white;
`;

export const Title = styled.span`
    display: block;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 1.2em;
`;

export const PublicationPlace = styled.span`
    display: inline-block;
    line-height: 30px;
    vertical-align: middle;
    margin-left: 20px;
`;