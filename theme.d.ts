import "styled-components";

import { ThemeProps } from "./src/theme/theme";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeProps {}
}
