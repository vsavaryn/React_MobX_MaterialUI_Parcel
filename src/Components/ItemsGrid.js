import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import {observer} from 'mobx-react';

import ItemModalDialog from "./ItemModalDialog";
import ItemEditDialog from "./ItemEditDialog";

function ItemsGrid({classes, store}) {
    const { data } = store;

    const [{isViewOpen, selectedViewItem}, setViewOpen] =
        React.useState({isViewOpen: false, selectedViewItem: null});
    const handleClickView = selectedViewItem => () => setViewOpen({isViewOpen: true, selectedViewItem});
    const handleViewClose = () => setViewOpen({isViewOpen: false, selectedViewItem: null});

    const [{isEditOpen, selectedEditItem, isAddMode}, setEditOpen] =
        React.useState({isEditOpen: false, selectedEditItem: null, isAddMode: false});
    const handleClickEdit = selectedEditItem => () => setEditOpen({isEditOpen: true, selectedEditItem, isAddMode: false});
    const handleEditClose = () => setEditOpen({isEditOpen: false, selectedEditItem: null, isAddMode: false});
    const handAddClick = () => setEditOpen({isEditOpen: true, selectedEditItem: null, isAddMode: true});

    const handleClickDelete = id => () => store.deleteItem(id);

    return (
        <>
            <Button variant="contained" color="primary" onClick={handAddClick}>
                Add new photo to the album
            </Button>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {data.map(item => {
                        const { id, title, imageSrc, description } = item;
                        return (
                            <Grid item key={id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={imageSrc}
                                        title={title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {title}
                                        </Typography>
                                        <Typography>
                                            {description.length > 250 ? description.slice(0, 100) + '...' : description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={handleClickView(item)}>
                                            View
                                        </Button>
                                        <Button size="small" color="primary" onClick={handleClickEdit(item)}>
                                            Edit
                                        </Button>
                                        <Button size="small" color="primary" onClick={handleClickDelete(id)}>
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

            <ItemModalDialog
                item={selectedViewItem}
                open={isViewOpen}
                handleClose={handleViewClose}
                classes={classes}
            />

            <ItemEditDialog
                item={selectedEditItem}
                open={isEditOpen}
                handleClose={handleEditClose}
                handleSave={item => {
                    isAddMode ? store.addItem(item) : store.editItem(item);
                    handleEditClose();
                }}
                isAddMode={isAddMode}
            />
        </>
    )
}


export default observer(ItemsGrid)
