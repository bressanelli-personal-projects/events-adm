import {
    DrinkCard,
    InnerCard,
    DrinkImage,
    Description,
    TextDrinkInfo,
    ImageContainer,
} from "./styles";

const DrinksCard = ({ drink }) => {
    return (
        <DrinkCard key={drink.id}>
            <InnerCard>
                <TextDrinkInfo>
                    <strong>Nome: </strong>
                    {drink.name}
                </TextDrinkInfo>

                <ImageContainer>
                    <DrinkImage
                        className="image"
                        src={drink.image_url}
                        alt={drink.name}
                    />
                </ImageContainer>

                <TextDrinkInfo>
                    <strong>Inicio de fabricação: </strong>
                    {drink.first_brewed}
                </TextDrinkInfo>
                <Description>
                    <strong>Descrição: </strong>
                    {drink.description}
                </Description>
                <TextDrinkInfo>
                    <strong>Volume: </strong>
                    {drink.volume.value} litros
                </TextDrinkInfo>
            </InnerCard>
        </DrinkCard>
    );
};

export default DrinksCard;
