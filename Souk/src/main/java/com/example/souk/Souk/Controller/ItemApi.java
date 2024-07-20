package com.example.souk.Souk.Controller;

import com.example.souk.Souk.Model.Item;
import com.example.souk.Souk.Service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/item")
@CrossOrigin(origins = "http://localhost:3000")
public class ItemApi {

    @Autowired
    private ItemService itemService;

    @PostMapping
    public Item post(@RequestBody Item item) {
        return itemService.post(item);
    }

    @GetMapping
    public List<Item> getItem() {
        return itemService.getItems();
    }

    @GetMapping("/{id}")
    public Optional<Item> getById(@PathVariable Long id) {
        return itemService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        itemService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Item updateItem(@PathVariable Long id, @RequestBody Item item) {
        return itemService.updateItem(id, item);
    }
}
