import styled from 'styled-components';

export const WorkPieceGrid_a_tag = styled.a.attrs({ className: 'imggrid-tile' })`
    background-image: url(${props => props.backImg});
    href: ${props => props.url};
 
`;
export const Work_bottom_div = styled.div.attrs({className : 'about-latest-news'})`
    background-image : url(${props => props.backImg});
`;