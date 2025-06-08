'use client';

import { useState } from "react";
import { Box, Snackbar, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { CakeFactory } from "pastry-ui";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import StarRateIcon from '@mui/icons-material/StarRate';
import IFoodIcon from '../images/ifood.svg';
import PlaceIcon from '@mui/icons-material/Place';
import cakeboards from "../data/cakeboards";
import reference from "../data/reference";

export default function Home() {
  const [open, setOpen] = useState(false);

  function openWebsite(url: string) {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  }

  const copyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      setOpen(true);
    }).catch((error) => {
      console.error('Erro ao copiar o link:', error);
    });
  }
  
  return (
    <Box>
      <CakeFactory 
        name="Sabores de bolo"
        logoUrl="/logo.svg"
        showSearchBar={true}
        searchBarPlaceholder="Buscar sabor..."
        cakeBoards={cakeboards}
        reference={reference}
      >
        <SpeedDial
          ariaLabel="Floating Action Button"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16
          }}
          FabProps={{
            sx: {
              backgroundColor: 'secondary.main',
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              }
            }
          }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<WhatsAppIcon />}
            slotProps={{
              tooltip: {
                title: 'WhatsApp'
              }
            }}
            sx={{
              backgroundColor: '#32a852',
              '&:hover': {
                backgroundColor: '#298040',
              }
            }}
            onClick={() => openWebsite('https://wa.me/5519988272444')}
          />
          <SpeedDialAction
            icon={<IFoodIcon />}
            slotProps={{
              tooltip: {
                title: 'iFood'
              }
            }}
            sx={{
              backgroundColor: '#db1616',
              '&:hover': {
                backgroundColor: '#9e0e0e',
              }
            }}
            onClick={() => openWebsite('https://www.ifood.com.br/delivery/hortolandia-sp/rebeca-ferreira-confeitaria-remanso-campineiro/c2a86c00-da37-4dd9-be88-41b845d0460c?utm_medium=share')}
          />
          <SpeedDialAction
            icon={<PlaceIcon />}
            slotProps={{
              tooltip: {
                title: 'Endereço'
              }
            }}
            sx={{
              backgroundColor: '#ac1456',
              '&:hover': {
                backgroundColor: '#7d0f3f',
              }
            }}
            onClick={() => openWebsite('https://www.google.com/maps/dir//R.+Am%C3%A9lia+Camargo+Blumer,+215+-+Remanso+Campineiro,+Hortol%C3%A2ndia+-+SP,+13184-440/@-22.8698435,-47.2954041,21527m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x94c8b94035f3cdeb:0x28d765e26b67544c!2m2!1d-47.2130025!2d-22.8698647?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D')}
          />
          <SpeedDialAction
            icon={<StarRateIcon />}
            slotProps={{
              tooltip: {
                title: 'Avaliar'
              }
            }}
            sx={{
              backgroundColor: '#ac1456',
              '&:hover': {
                backgroundColor: '#7d0f3f',
              }
            }}
            onClick={() => openWebsite('https://g.page/r/CUxUZ2viZdcoEBM/review')}
          />
          <SpeedDialAction
            icon={<ShareIcon />}
            slotProps={{
              tooltip: {
                title: 'Compartilhar'
              }
            }}
            sx={{
              backgroundColor: '#ac1456',
              '&:hover': {
                backgroundColor: '#7d0f3f',
              }
            }}
            onClick={() => copyLink()}
          />
        </SpeedDial>
      </CakeFactory>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Link do cardápio copiado"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Box>
  );
}
