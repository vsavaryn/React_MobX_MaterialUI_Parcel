import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ItemEditDialog({item, open, handleClose, handleSave, isAddMode}) {
    const [modifiedItem, setModifiedItem] = React.useState({...item});
    React.useEffect(() => setModifiedItem({ ...item }), [open]);
    const {title = '', imageSrc = '', description = ''} = modifiedItem;

    const handleInputChange = ({target: {id, value}}) => setModifiedItem({ ...modifiedItem, [id]: value });

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{isAddMode ? 'Add' : 'Edit'}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        defaultValue={title}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="imageSrc"
                        label="Image URL"
                        type="text"
                        defaultValue={imageSrc}
                        onChange={handleInputChange}
                        fullWidth
                    />
                    <TextField
                        multiline
                        rows={3}
                        rowsMax={10}
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        defaultValue={description}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => handleSave(modifiedItem)} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
