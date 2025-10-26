// package com.backend.sugarlab;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import static org.junit.jupiter.api.Assertions.assertNotEquals;
// import static org.junit.jupiter.api.Assertions.assertNotNull;
// import static org.junit.jupiter.api.Assertions.assertThrows;
// import static org.mockito.ArgumentMatchers.any;
// import static org.mockito.Mockito.verify;
// import static org.mockito.Mockito.when;

// import java.util.List;
// import java.util.Optional;

// import org.junit.jupiter.api.Test;
// import org.junit.jupiter.api.extension.ExtendWith;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.junit.jupiter.MockitoExtension;

// import com.backend.sugarlab.DTO.AlimentoCadastroDto;
// import com.backend.sugarlab.entity.Alimento;
// import com.backend.sugarlab.repository.AlimentoRepository;
// import com.backend.sugarlab.service.AlimentoService;

// @ExtendWith(MockitoExtension.class)
// public class AlimentoTest {

//     @Mock
//     AlimentoRepository alimentoRepository;

//     @InjectMocks
//     AlimentoService alimentoService;

//     @Test
//     void shouldReturnExceptionNullableData(){
//         AlimentoCadastroDto dto = new AlimentoCadastroDto(null, null, null);

//         assertThrows(IllegalArgumentException.class, () -> {
//             alimentoService.criarAlimento(dto);
//         });

//     }

//     @Test
//     void shouldCreateAlimento(){
//         AlimentoCadastroDto alimentoDto = new AlimentoCadastroDto("Bolo de cenoura", "Bolo feito com cenoura", [1, 2, 3]);
//         Alimento alimento = new Alimento(1, "Bolo de cenoura", "Bolo feito com cenoura", [1, 2, 3]);

//         when(alimentoRepository.save(any(Alimento.class))).thenReturn(alimento);

//         Alimento result = alimentoService.criarAlimento(alimentoDto);

//         assertNotNull(result);
//         assertEquals("Bolo de cenoura", result.getNome());
//         assertEquals("Bolo feito com cenoura", result.getDescricao());
//     }

//     @Test
//     void shouldReturnAllAlimentos(){
//         Alimento a1 = new Alimento(1, "Brigadeiro", "Doce redondo gostoso");
//         Alimento a2 = new Alimento(2, "Barra de chocolate", "Doce em formato de barra");

//         List<Alimento> alimentos = List.of(a1, a2);

//         when(alimentoRepository.findAll()).thenReturn(alimentos);

//         List<Alimento> result = alimentoService.resgatarTodosAlimentos();

//         assertNotNull(result);
//         assertEquals(2, result.size());
//         assertEquals("Brigadeiro", result.get(0).getNome());
//         assertEquals("Barra de chocolate", result.get(1).getNome());
//         assertEquals("Doce redondo gostoso", result.get(0).getDescricao());
//         assertEquals("Doce em formato de barra", result.get(1).getDescricao());
//     }

//     @Test
//     void shouldReturnOneComida(){
//         Alimento alimento = new Alimento(1, "Bolo de milho", "Bolo feito de milho");

//         when(alimentoRepository.findByNome("Bolo de milho")).thenReturn(Optional.of(alimento));

//         Alimento result = alimentoService.resgatarUmAlimento("Bolo de milho");

//         assertNotNull(result);
//         assertEquals(result.getNome(), "Bolo de milho");
//         assertEquals(result.getDescricao(), "Bolo feito de milho");
//     }

//     @Test
//     void shouldReturnEditedName(){

//         Alimento a = new Alimento(1, "Sonho de chocolate", "Massa de pão com chocolate e bastante açucar");
//         AlimentoCadastroDto aDto = new AlimentoCadastroDto("Sonho de nata", "Massa de pão com chocolate e bastante açucar");

//         when(alimentoRepository.findById(1)).thenReturn(Optional.of(a));
//         when(alimentoRepository.save(any(Alimento.class))).thenAnswer(invocation -> invocation.getArgument(0));

//         Alimento result = alimentoService.editarAlimento(1, aDto);

//         assertNotNull(result);
//         assertEquals("Sonho de nata", result.getNome());
//         assertEquals("Massa de pão com chocolate e bastante açucar", result.getDescricao());
//         assertNotEquals("Sonho de chocolate", result.getNome());

//         verify(alimentoRepository).findById(1);
//         verify(alimentoRepository).save(a);
//     }

//     @Test
//     void shouldReturnNull(){

//         Alimento alimento = new Alimento(1, "Sonho de chocolate", "Massa de pão com chocolate e bastante açucar");

//         when(alimentoRepository.findById(1)).thenReturn(Optional.of(alimento));

//         alimentoService.deletarAlimento(1);

//         verify(alimentoRepository).findById(1);
//         verify(alimentoRepository).delete(alimento);
//     }

// }
