export type ColorType =
    | 'BACK'
    | 'WHITE'
    | 'TRANSPARENT'
    | 'MINE_SHAFT'
    | 'EMPEROR'
    | 'DOVE_GRAY'
    | 'GRAY'
    | 'DUSTY_GRAY'
    | 'SILVER_CHALICE'
    | 'ORANGE_SODA'
    | 'RYB_ORANGE'
    | 'PASTEL_ORANGE'
    | 'MODAL'
    | 'AMERICAN_ORANGE';

type Colors = {
    BACK: string;
    WHITE: string;
    TRANSPARENT: string;
    MINE_SHAFT: string;
    EMPEROR: string;
    DOVE_GRAY: string;
    GRAY: string;
    DUSTY_GRAY: string;
    SILVER_CHALICE: string;
    ORANGE_SODA: string;
    RYB_ORANGE: string;
    PASTEL_ORANGE: string;
    MODAL: string;
    AMERICAN_ORANGE: string;
};

const colors: Colors = {
    BACK: '#000000',
    WHITE: '#FFFFFF',
    TRANSPARENT: 'transparent',
    MINE_SHAFT: '#3B3B3B',
    EMPEROR: '#525252',
    DOVE_GRAY: '#696969',
    GRAY: '#808080 ',
    DUSTY_GRAY: '#979797',
    SILVER_CHALICE: '#AEAEAE',
    ORANGE_SODA: '#FA5B3D',
    RYB_ORANGE: '#FB9902',
    PASTEL_ORANGE: '#FFB347',
    MODAL: 'rgba(0,0,0,0.2)',
    AMERICAN_ORANGE: '#FF8B00',

};

export default colors;