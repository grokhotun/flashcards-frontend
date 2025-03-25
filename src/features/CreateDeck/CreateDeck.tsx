'use client';

import React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Button, Form, Input, Title } from '@/ui';
import { deck } from '@/api';

export const CreateDeck = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2
          }}>
          <Title level="h5" className="mb-4">
            Создание колоды
          </Title>
          <Form>
            <Form.Field label="Имя">
              <Input onChange={e => setName(e.target.value)} />
            </Form.Field>
            <Button
              className="w-full"
              onClick={() => {
                deck
                  .create({ name })
                  .then(() => {
                    setOpen(false);
                    setIsSnackbarOpen(true);
                    onSuccess?.();
                  })
                  .finally(() => {
                    setOpen(false);
                  });
              }}>
              Сохранить
            </Button>
          </Form>
        </Box>
      </Modal>
      <Fab
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          position: 'fixed',
          bottom: theme => theme.spacing(8),
          right: theme => theme.spacing(3)
        }}
        color="primary"
        aria-label="add">
        <AddIcon />
      </Fab>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}>
          Колода добавлена!
        </Alert>
      </Snackbar>
    </>
  );
};
