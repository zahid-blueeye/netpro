import Icon from "@mui/icons-material/HandymanRounded";
import { Card, CardContent, IconButton, Typography } from "@mui/material";

const HomeServiceCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <IconButton>
          <Icon />
        </IconButton>
        <Typography my={2} variant="h6" fontWeight={700}>
          Avadanlıqların quraşdırılması və konfiqurasiyası
        </Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam
          ullamcorper aliquet non, ut id sit eros integer.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeServiceCard;
