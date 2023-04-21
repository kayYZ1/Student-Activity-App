import styled from "styled-components";

const ViewEvents = styled.div`
    max-width: 70vw;
    margin: 0 auto;
`

const Events = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`

const EventItem = styled.div`
    display: flex;
    padding: 1rem;
    @media (min-width: 40rem) {
        width: 50%;
    }
    @media (min-width: 60rem) {
        width: 33.3333%;
    }
`

const Event = styled.div`
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const EventContent = styled.div`
    padding: 1rem;
`

const EventTitle = styled.h2`
    color: #000;
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: capitalize;
    margin-top: 10px;
`

const EventDescription = styled.p`
    color: #000;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-weight: 400;
    margin-top: 1rem;
`

const EventButtonExpired = styled.button`
    color: red;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
`

const EventButton = styled(EventButtonExpired)`
    color: #000;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`

const Image = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;
`

const IsExpired = styled.h4`
    color: red  
`

export { ViewEvents, Events, Event, EventButton, EventButtonExpired, EventContent, EventDescription, EventItem, Image, IsExpired, EventTitle }