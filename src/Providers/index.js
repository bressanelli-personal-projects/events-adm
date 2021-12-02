import { DrinksProvider } from "./drinks";
import { WeddingProvider } from "./wedding";
import { GraduationProvider } from "./graduation";
import { ConfraternizationProvider } from "./confraternization";

const Providers = ({ children }) => {
    return (
        <DrinksProvider>
            <WeddingProvider>
                <GraduationProvider>
                    <ConfraternizationProvider>
                        {children}
                    </ConfraternizationProvider>
                </GraduationProvider>
            </WeddingProvider>
        </DrinksProvider>
    );
};

export default Providers;
