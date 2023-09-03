import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import EditIcon from '@mui/icons-material/Edit';

const CustomCloseIcon = styled(CloseIcon)`
  font-size: 4rem;
  stroke: #6d7f8e;
  stroke-width: 0.3rem;
`;

const CustomPanoramaFishEyeIcon = styled(PanoramaFishEyeIcon)`
  font-size: 4rem;
  stroke: #fca730;
  stroke-width: 0.2rem;
`;

const CustomEditIcon = styled(EditIcon)`
  font-size: 4rem;
  stroke: #fff;
  color: #fff;
  stroke-width: 0.2rem;
`;

function Icon(props: {name: string}): JSX.Element {
    switch (props.name) {
        case 'cross':
            return <CustomCloseIcon/>
        case 'circle':
            return <CustomPanoramaFishEyeIcon />
        default:
            return <CustomEditIcon />;
    }
}

export default Icon;