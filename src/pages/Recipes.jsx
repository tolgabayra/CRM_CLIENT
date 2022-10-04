import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,

} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function Recipes() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>

      <h2 className='mt-3 pb-5 text-2xl'>Ürün Listeleri</h2>


      <Button colorScheme="green" onClick={onOpen}>Yeni Ekle</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Yeni Ürün Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Merhaba,

          </ModalBody>

          <ModalFooter>

            <Button colorScheme="green" variant="solid" mr={1} >Kaydet</Button>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              İptal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <TableContainer mt={4} bgColor="gray.50">
        <Table size='md'>
          <Thead>
            <Tr>
              <Th>Ürün Adı</Th>
              <Th>Stok Durumu</Th>
              <Th>Fiyatı</Th>
              <Th>Kategori</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Açıklama</Td>
              <Td>millimetres (mm)</Td>
              <Td >25.4</Td>
              <Td >Züccaciye</Td>

            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td >30.48</Td>
              <Td >Oyuncak</Td>

            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td >0.91444</Td>
              <Td >Giyim</Td>

            </Tr>
            
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th >multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>






    </div>
  )
}
