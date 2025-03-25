'use client';

import React from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Button, Form, Input, Select, TextArea, Title } from '@/ui';
import { cards } from '@/api';

export const CreateCard = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [error, setErrors] = React.useState<string[]>([]);
  const [front, setFront] = React.useState('');
  const [back, setBack] = React.useState('');
  const [deck, setDeck] = React.useState<number | null>(null);
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

  const isError = error.length > 0;

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
            Создание карточки
          </Title>
          {isError &&
            error.map(msg => (
              <p key={msg} className="my-4 text-sm text-red-600">
                {msg}
              </p>
            ))}
          <Form>
            <Form.Field label="Слово">
              <Input onChange={e => setFront(e.target.value)} />
            </Form.Field>
            <Form.Field label="Перевод">
              <Input onChange={e => setBack(e.target.value)} />
            </Form.Field>
            <Form.Field label="Колода">
              <Select
                onChange={e => setDeck(Number(e.target.value))}
                options={[
                  { value: 'fruits', label: 'Фрукты' },
                  { value: 'vegetables', label: 'Овощи' }
                ]}
              />
            </Form.Field>
            <Form.Field label="Пример">
              <TextArea />
            </Form.Field>
            <Button
              className="w-full"
              onClick={() => {
                // FIXME: Fix logic
                if (!deck) return;
                cards
                  .create({ front, back, deck })
                  .then(() => {
                    setOpen(false);
                    setIsSnackbarOpen(true);
                    onSuccess?.();
                  })
                  .catch(e => {
                    const messages = e.response.data.message;
                    setErrors(messages);
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
          Карточка добавлена!
        </Alert>
      </Snackbar>
    </>
  );
};
