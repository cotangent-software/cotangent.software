import Typography from "typography"
import theme from "typography-theme-bootstrap"

theme.baseFontSize = '20pt';
theme.bodyColor = 'white';

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography
