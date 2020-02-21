import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default function({classes}) {
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
                {/*    Album layout*/}
                {/*</Typography>*/}
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    //TODO Should be some intro here...
                </Typography>
                <div className={classes.heroButtons}>
                    {/*<Grid container spacing={2} justify="center">*/}
                    {/*    <Grid item>*/}
                    {/*        <Button variant="contained" color="primary">*/}
                    {/*            Main call to action*/}
                    {/*        </Button>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item>*/}
                    {/*        <Button variant="outlined" color="primary">*/}
                    {/*            Secondary action*/}
                    {/*        </Button>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </div>
            </Container>
        </div>
    );
}
