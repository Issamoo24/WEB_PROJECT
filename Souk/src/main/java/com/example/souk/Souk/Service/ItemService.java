package com.example.souk.Souk.Service;

import com.example.souk.Souk.Model.Item;
import com.example.souk.Souk.Repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public Item post(Item item) {
        return itemRepository.save(item);
    }

    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getById(Long id) {
        return itemRepository.findById(id);
    }

    public void deleteById(Long id) {
        itemRepository.deleteById(id);
    }

    public Item updateItem(Long id, Item item) {
        Optional<Item> existingItemOptional = itemRepository.findById(id);
        if (existingItemOptional.isPresent()) {
            Item existingItem = existingItemOptional.get();
            existingItem.setName(item.getName());
            existingItem.setPrice(item.getPrice());
            existingItem.setMf_date(item.getMf_date());
            existingItem.setExp_date(item.getExp_date());
            return itemRepository.save(existingItem);
        } else {
            throw new RuntimeException("Item not found with id: " + id);
        }
    }
}
