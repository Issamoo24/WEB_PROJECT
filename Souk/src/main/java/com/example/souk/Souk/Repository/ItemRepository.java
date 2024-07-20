package com.example.souk.Souk.Repository;

import com.example.souk.Souk.Model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository <Item , Long>{
}
