package in.pratikkashyap.invoicegeneratorapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import in.pratikkashyap.invoicegeneratorapi.entity.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByClerkId(String clerkId);

    boolean existsByClerkId(String clerkId);
}
